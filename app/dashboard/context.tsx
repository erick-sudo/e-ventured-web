import React, { createContext } from "react";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

type VerticalAnchor = "top" | "bottom";
type HorizontalAnchor = "left" | "right" | "center";
type SnackbarPosition = `${VerticalAnchor}-${HorizontalAnchor}`;

interface AppContextProps {
    snackNotifier: (
      message: string,
      variant: VariantType,
      position: SnackbarPosition
    ) => void;
  }

export const AppContext = createContext<AppContextProps>(null!);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const snackNotifier = (
    message: string,
    variant: VariantType,
    position: SnackbarPosition
  ) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 3000,
      anchorOrigin: (() => {
        const V_ANCHOR_ORIGINS: VerticalAnchor[] = ["top", "bottom"];
        const H_ANCHOR_ORIGINS: HorizontalAnchor[] = [
          "left",
          "right",
          "center",
        ];
        const positions = position.split("-").slice(0, 2) as [
          VerticalAnchor,
          HorizontalAnchor
        ];
        return {
          vertical: V_ANCHOR_ORIGINS.includes(positions[0])
            ? positions[0]
            : "bottom",
          horizontal: H_ANCHOR_ORIGINS.includes(positions[1])
            ? positions[1]
            : "left",
        };
      })(),
    });
  };

  const contextData = {
    snackNotifier,
  };
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
