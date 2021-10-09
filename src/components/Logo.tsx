import { Box, BoxProps } from "@material-ui/core";
import Heart from "../assets/Heart.png";

function Logo({ sx }: BoxProps) {
  return (
    <Box sx={sx}>
      <img style={{ width: 64, height: 64 }} src={Heart} alt="logo" />
    </Box>
  );
}

export default Logo;
