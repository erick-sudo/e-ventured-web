import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    boxShadow: "0.06em 0.06em 0.5em rgb(55, 48, 163)"
  },
}));
