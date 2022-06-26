import { StyledTableCell } from "../../service/common";

const XYZcomponent = ({ arrABBR }) => {
  return arrABBR.map((abbr) => {
    return (
      <StyledTableCell key={Math.random()} align="center">
        {abbr}
      </StyledTableCell>
    );
  });
};

export { XYZcomponent };
