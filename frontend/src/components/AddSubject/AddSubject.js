import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import axios from "axios";
import { React, Component } from "react";

export default class AddSubject extends Component {
  state = {
    courses: [],
    selectedCourse: "",
    selectedSemester: "",
    disableSemDropdown: true,
    courseSemesterCount: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/admin/getCourseDetails")
      .then((resp) => {
        this.setState({ courses: resp.data });
      });
  }

  handleCourseDropdownChange = (event) => {
    this.setState(
      { selectedCourse: event.target.value, disableSemDropdown: false },
      () => {
        var semesterCount = this.state.courses.filter((el) => {
          return el.name === this.state.selectedCourse;
        })[0].semesterCount;

        var courseSemesterCount = [];
        for (var i = 1; i <= semesterCount; i++) {
          courseSemesterCount.push(i);
        }
        this.setState({ courseSemesterCount: courseSemesterCount });
      }
    );
  };

  handleSemesterDropdownChange = (event) => {
    this.setState({ selectedSemester: event.target.value });
  };

  render() {
    return (
      <>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="course-dropdown">Course</InputLabel>
            <Select
              labelId="course-dropdown"
              id="course-dropdown"
              value={this.state.selectedCourse}
              onChange={this.handleCourseDropdownChange}
              input={<OutlinedInput label="Course" />}
              // MenuProps={MenuProps}
              style={{ width: 250 }}
            >
              {this.state.courses.map((el) => (
                <MenuItem key={el.name} value={el.name}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="semester-dropdown">Semester</InputLabel>
            <Select
              labelId="semester-dropdown"
              id="semester-dropdown"
              value={this.state.selectedSemester}
              onChange={this.handleSemesterDropdownChange}
              input={<OutlinedInput label="Semester" />}
              // MenuProps={MenuProps}
              style={{ width: 250 }}
              disabled={this.state.disableSemDropdown}
            >
              {this.state.courseSemesterCount.map((el) => (
                <MenuItem key={el} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </>
    );
  }
}
