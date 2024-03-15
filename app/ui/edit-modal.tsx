"use client";

import { useEffect, useState } from "react";
import { ModalLink } from "./modal-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileEdit } from "@fortawesome/free-solid-svg-icons";
import { InputGroup, Form } from "react-bootstrap";
import { OptionSelection } from "./option-selection";
import {
  FormInputField,
  TextAreaField,
  FormSelectionField,
  FormField,
  State,
} from "../lib/definitions";
import { snakeCaseToTitleCase } from "../lib/utils";
import { getRequest, postRequest } from "../lib/apis";

export default function EditModal({
  dataEndpoint,
  icon = <FontAwesomeIcon icon={faFileEdit} />,
  anchorText = "Edit",
  anchorClassName = "flex gap-2 items-center line-shadow rounded px-4 py-2 text-amber-800 hover:text-white hover:bg-amber-700 duration-200",
  description = "Edit",
  updateEndpoint = "",
  interceptUpdate,
  receiveNewRecord,
  editableFields,
  displayFields,
}: {
  disableEditing?: boolean;
  dataEndpoint: string;
  icon?: JSX.Element;
  anchorText?: string;
  anchorClassName?: string;
  description?: string;
  updateEndpoint?: string;
  interceptUpdate?: (data: any) => void;
  receiveNewRecord?: (data: any) => void;
  editableFields: (FormInputField | FormSelectionField | TextAreaField)[];
  displayFields: FormField[];
}) {
  const [endpoint, setEndpoint] = useState("");
  const [formData, setFormData] = useState({});
  const [changes, setChanges] = useState({});

  useEffect(() => {
    if (endpoint) {
      getRequest({
        endpoint: endpoint,
        successCallback: (res) => {
          setFormData(res);
        },
        errorCallback: (level, err) => {
          throw new Error(`${level} An error occurred while fetching data.`);
        },
      });
    }
  }, [endpoint]);

  const handleChange = (k: string, v: string) => {
    setFormData({
      ...formData,
      [k]: v,
    });
    setChanges({
      ...changes,
      [k]: v,
    });
  };

  const handleUpdate = () => {
    if (typeof changes == "object" && Object.keys(changes).length > 0) {
      if (typeof interceptUpdate === "function") {
        interceptUpdate(changes);
      } else {
        postRequest({
          endpoint: updateEndpoint,
          method: "PATCH",
          payload: changes,
          successCallback: (res) => {
            if (typeof receiveNewRecord === "function") receiveNewRecord(res);
          },
          errorCallback: (level, err) => {
            throw new Error(`${level} An error occurred while updating data.`);
          },
        });
      }
    } else {
      throw new Error("No changes detected");
    }
    setEndpoint("");
  };

  return (
    <div className="">
      <ModalLink
        anchorClassName={anchorClassName}
        submitButtonClassName="ring-1 ring-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded p-2"
        cancelButtonClassName="ring-1 ring-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded p-2"
        anchorText={anchorText}
        submitText="Save Changes"
        onInit={() => {
          setEndpoint(dataEndpoint);
        }}
        hostResourceCleaner={() => {
          setFormData({});
          setChanges({});
          setEndpoint("");
        }}
        submitData={handleUpdate}
        // disabled={Boolean(
        //   editableFields.find((field) => !Boolean(formData[field.name]))
        // )}
        description={description}
        icon={icon}
      >
        {endpoint &&
        !Boolean(
          [...displayFields, ...editableFields.map((f) => f.name)].find(
            (field) => true //formData[field] === undefined
          )
        ) &&
        Object.keys(formData).length > 0 ? (
          <div className="grid gap-4">
            <div className="grid gap-2 shadow-sm p-2 rounded">
              {displayFields.map((field, index) => (
                <div className="" key={index}>
                  <div className=" text-amber-800 font-bold px-4 text-lg">
                    {snakeCaseToTitleCase(field.name)}
                  </div>
                  {/* <div className=" px-8">{formData[field.name]}</div> */}
                </div>
              ))}
            </div>
            <div className="grid gap-4">
              {editableFields.map((field, index) =>
                (field as FormSelectionField).options ? (
                  <OptionSelection
                    key={index}
                    onChange={handleChange}
                    select={field as FormSelectionField}
                  />
                ) : (field as TextAreaField) ? (
                  <InputGroup key={index}>
                    <InputGroup.Text>
                      <span className="font-bold px-4">
                        {snakeCaseToTitleCase(field.name)}
                      </span>
                    </InputGroup.Text>
                    <Form.Control
                      style={{ borderRadius: 0, border: "none" }}
                      as="textarea"
                      rows={(field as TextAreaField).rows || 4}
                      name={field.name}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      required
                    />
                  </InputGroup>
                ) : (
                  <InputGroup className="" key={index}>
                    <InputGroup.Text
                      style={{
                        maxWidth: "40%",
                        minWidth: "40%",
                        direction: "rtl",
                      }}
                    >
                      <span className="font-bold">
                        {snakeCaseToTitleCase(field.name)}
                      </span>
                    </InputGroup.Text>

                    <Form.Control
                      type={(field as FormInputField).as}
                      style={{ maxWidth: "60%", minWidth: "60%" }}
                      name={field.name}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      required
                    />
                  </InputGroup>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="relative min-h-[10vh] flex justify-center items-center">
            <div className="px-4 py-2 shadow-inner shadow-black rounded-lg">
              {/* <ThreeDots height={10} color="rgb(146 64 14)" /> */}
            </div>
          </div>
        )}
      </ModalLink>
    </div>
  );
}
