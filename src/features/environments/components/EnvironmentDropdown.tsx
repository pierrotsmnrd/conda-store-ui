import React from "react";
import Accordion from "@mui/material/Accordion";
import { StyledAccordionExpandIcon, StyledAccordionSummary } from "src/styles";
import { INamespaceEnvironments } from "src/common/interfaces";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Environment } from "./Environment";

interface IEnvironmentDropdownProps {
  /**
   * @param data object containing the namespace information and the list of environments that belong to it
   */
  data: INamespaceEnvironments;
}

export const EnvironmentDropdown = ({
  data: { namespace, environments }
}: IEnvironmentDropdownProps) => {
  return (
    <Accordion
      sx={{ border: "none", position: "initial" }}
      elevation={0}
      disableGutters
    >
      <StyledAccordionSummary
        sx={{
          flexDirection: "row-reverse",
          paddingLeft: "16px",
          border: "none"
        }}
        expandIcon={<StyledAccordionExpandIcon />}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ width: "217px" }}>{namespace}</Typography>
          <IconButton>
            <AddIcon sx={{ width: "15px", height: "15px", color: "#2B2B2B" }} />
          </IconButton>
        </Box>
      </StyledAccordionSummary>
      <AccordionDetails
        sx={{ paddingLeft: "42px", paddingTop: "5px", paddingBottom: "0px" }}
      >
        <List sx={{ padding: "0px" }}>
          {environments.map(environment => (
            <ListItem
              key={environment.id}
              disablePadding
              sx={{ marginBottom: "20px" }}
            >
              <Environment environment={environment} />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
