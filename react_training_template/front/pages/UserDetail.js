import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { Box, Stack } from "@mui/system";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  getSearchUserById,
  putUpdateUserByIdAndValues,
  deleteUserById,
} from "../redux/reducers/userSlice";
import * as Yup from "yup";

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSearchUserById(id));
  }, []);

  const user = useSelector((state) => state.users.value);
  const status = useSelector((state) => state.users.status);

  const tableStyling = {
    padding: "0px 0px",
  };

  const initialValues = {
    id: user?.id ?? 0,
    name: user?.name ?? "",
    email: user?.email ?? "",
    birthDate: user?.birthDate ?? "",
    gender: user?.gender ?? "",
    address: user?.address ?? "",
    phone: user?.phone ?? "",
    hiredType: user?.hiredType ?? "",
    hiredDate: user?.hiredDate ?? "",
    jobList: [
      {
        companyName: user.jobList ? user.jobList[0]?.companyName ?? "" : "",
        startDate: user.jobList ? user.jobList[0]?.startDate ?? "" : "",
        endDate: user.jobList ? user.jobList[0]?.endDate ?? "" : "",
        majorJob: user.jobList ? user.jobList[0]?.majorJob ?? "" : "",
      },
    ],
  };

  const validationSchema = Yup.object({
    jobList: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string().required("Required").nullable(),
        startDate: Yup.string().required("Required").nullable(),
        endDate: Yup.string().required("Required").nullable(),
        majorJob: Yup.string().required("Required").nullable(),
      })
    ),
  });

  const handleDelete = (formik) => {
    if (window.confirm("?????????????????????????")) {
      formik.setSubmitting(true);

      dispatch(deleteUserById(formik.values.id));

      formik.setSubmitting(false);

      alert("?????? ???????????????.");
      navigate("/", { replace: true });
    } else {
      alert("?????? ???????????????.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values, onSubmitProps) => {
        if (window.confirm("?????????????????????????")) {
          onSubmitProps.setSubmitting(true);
          dispatch(putUpdateUserByIdAndValues(values));
          onSubmitProps.setSubmitting(false);
          alert("?????? ???????????????.");
        } else {
          alert("?????? ???????????????.");
        }
        navigate(0);
      }}
    >
      {(formik) => {
        return (
          <>
            <Form>
              <Grid
                container
                sx={{ border: "1px solid gray", padding: "20px 50px" }}
              >
                {/* ---------1????????????--------- */}
                <Grid item xs={2}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "200px",
                      alignItems: "flex-end",
                    }}
                  >
                    <Avatar sx={{ bgcolor: orange[500] }}>01</Avatar> ????????????
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={10}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  {/* ?????? */}
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography>??????</Typography>
                    </Box>
                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "500px" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="name"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                    </Box>
                  </Box>

                  {/* ????????? */}
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography>?????????</Typography>
                    </Box>
                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "500px" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="email"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </Box>
                  </Box>
                </Grid>

                <Divider sx={{ width: "90%" }} />

                {/* ---------2????????????--------- */}
                <Grid item xs={2}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "200px",
                      alignItems: "flex-end",
                    }}
                  >
                    <Avatar sx={{ bgcolor: orange[500] }}>02</Avatar> ????????????
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={10}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  {/* ?????? */}
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography>??????</Typography>
                    </Box>
                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "500px" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="gender"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.gender}
                      />
                    </Box>
                  </Box>

                  {/* ????????? */}
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography>?????????</Typography>
                    </Box>
                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "500px" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="phone"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                      />
                    </Box>
                  </Box>

                  {/* ????????? ?????? */}
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography>????????? ??????</Typography>
                    </Box>
                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "500px" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="address"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                      />
                    </Box>
                  </Box>

                  {/* ???????????? */}
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography>????????????</Typography>
                    </Box>
                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "500px" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="birthDate"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.birthDate}
                      />
                    </Box>
                  </Box>

                  {/* ????????? ?????? */}
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography>????????? ??????</Typography>
                    </Box>
                    <Stack direction="row" spacing={2}>
                      <Avatar src="/broken-image.jpg" />
                    </Stack>
                  </Box>
                </Grid>

                <Divider sx={{ width: "90%" }} />

                {/* ---------3????????????--------- */}
                <Grid item xs={2}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "200px",
                      alignItems: "flex-end",
                    }}
                  >
                    <Avatar sx={{ bgcolor: orange[500] }}>03</Avatar> ?????? ??????
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={10}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  {/* ????????? */}
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography>?????????</Typography>
                    </Box>
                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "500px" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="hiredDate"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.hiredDate}
                      />
                    </Box>
                  </Box>

                  {/* ?????? ?????? */}
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography>?????? ??????</Typography>
                    </Box>
                    <Box
                      sx={{
                        "& > :not(style)": { m: 1, width: "500px" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        name="hiredType"
                        variant="standard"
                        onChange={formik.handleChange}
                        value={formik.values.hiredType}
                      />
                    </Box>
                  </Box>
                </Grid>

                <Divider sx={{ width: "90%" }} />

                {/* ---------4????????????--------- */}
                <Grid item xs={2}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "200px",
                      alignItems: "flex-end",
                    }}
                  >
                    <Avatar sx={{ bgcolor: orange[500] }}>04</Avatar> ?????? ??????
                  </Box>
                </Grid>
                <Grid item xs={10}>
                  <TableContainer
                    component={Paper}
                    sx={{
                      border: "1px solid rgba(0,0,0,0.2)",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Table sx={{ tableLayout: "auto" }}>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{ ...tableStyling, width: 100 }}
                            align="center"
                          >
                            ????????????
                          </TableCell>

                          <TableCell
                            sx={{ ...tableStyling, width: 100 }}
                            align="center"
                          >
                            ??????
                          </TableCell>

                          <TableCell
                            sx={{ ...tableStyling, width: 100 }}
                            align="center"
                          >
                            ???????????????
                          </TableCell>
                          <TableCell
                            sx={{ ...tableStyling, width: 100 }}
                            align="center"
                          >
                            ???????????????
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell component="th" align="center">
                            <TextField
                              name="jobList[0].companyName"
                              variant="standard"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.jobList[0].companyName}
                            />
                            <ErrorMessage name="jobList[0].companyName" />
                          </TableCell>
                          <TableCell align="center">
                            <TextField
                              name="jobList[0].majorJob"
                              variant="standard"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.jobList[0].majorJob}
                            />
                            <ErrorMessage name="jobList[0].majorJob" />
                          </TableCell>
                          <TableCell align="center">
                            <TextField
                              name="jobList[0].startDate"
                              variant="standard"
                              placeholder="YYYY-MM-DD"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.jobList[0].startDate}
                            />
                            <ErrorMessage name="jobList[0].startDate" />
                          </TableCell>
                          <TableCell align="center">
                            <TextField
                              name="jobList[0].endDate"
                              variant="standard"
                              placeholder="YYYY-MM-DD"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.jobList[0].endDate}
                            />
                            <ErrorMessage name="jobList[0].endDate" />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ align: "right" }}
                disabled={formik.isSubmitting}
              >
                ????????????
              </Button>
              <Button
                sx={{ align: "right" }}
                variant="contained"
                disabled={formik.isSubmitting}
                onClick={() => handleDelete(formik)}
              >
                ????????????
              </Button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default UserDetail;
