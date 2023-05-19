import React from "react";

import {
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { ExpandMore } from "@mui/icons-material";
import { gameList } from "../../Data";

import "./Filter.css";

function Filter() {
  const genreList = gameList.reduce((list, currentGame) => {
    return list.includes(currentGame.genre)
      ? list
      : [...list, currentGame.genre];
  }, []);

  return (
    <div className="filter">
      <h2 className="filter_head">FILTER</h2>
      <div className="filter_wrap">
        {/* CATEGORY */}
        <Accordion sx={{ backgroundColor: "#000" }}>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <legend className="filter_legend">GENRE</legend>
          </AccordionSummary>
          <AccordionDetails>
            <fieldset className="filter_field filter_genre">
              {genreList.map((currentGenre) => {
                return (
                  <FormControlLabel
                    sx={{ color: "#fff" }}
                    control={
                      <Checkbox
                        sx={{
                          color: "#fcaf17",
                          "&.Mui-checked": {
                            color: "#fcaf17",
                          },
                        }}
                      />
                    }
                    label={currentGenre}
                  />
                );
              })}
            </fieldset>
          </AccordionDetails>
        </Accordion>

        {/* SORT */}
        <Accordion sx={{ backgroundColor: "#000" }}>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <legend className="filter_legend">SORT</legend>
          </AccordionSummary>
          <AccordionDetails>
            <fieldset className="filter_field filter_sort">
              <RadioGroup defaultValue="female" name="radio-buttons-group">
                <FormControlLabel
                  value="four"
                  sx={{ color: "#fff" }}
                  control={
                    <Radio
                      sx={{
                        color: "#fcaf17",
                        "&.Mui-checked": {
                          color: "#fcaf17",
                        },
                      }}
                    />
                  }
                  label="Price: Low to High"
                />

                <FormControlLabel
                  value="one"
                  sx={{ color: "#fff" }}
                  control={
                    <Radio
                      sx={{
                        color: "#fcaf17",
                        "&.Mui-checked": {
                          color: "#fcaf17",
                        },
                      }}
                    />
                  }
                  label="Price: High to Low"
                />
              </RadioGroup>
            </fieldset>
          </AccordionDetails>
        </Accordion>

        {/* RATING */}
        {/* <fieldset className="filter_field filter_rating">
          <legend className="filter_legend">RATING</legend>
          <Slider defaultValue={30} step={10} marks min={10} max={110} />
        </fieldset> */}
      </div>
    </div>
  );
}

export default Filter;
