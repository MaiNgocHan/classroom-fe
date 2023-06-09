import axiosClient from "../axiosClient";
import authHeader from "./auth-header";

const classroomAPI = {
  getAllClasses: (param) => {
    const url = "/classes/user/" + param;
    return axiosClient.get(url, {
      headers: authHeader(),
    });
  },
  createClass: (data) => {
    const url = "/classes";
    return axiosClient.post(
      url,
      {
        className: data.className,
        numberOfStudent: data.numberOfStudent,
        banner: data.banner,
      },
      {
        headers: authHeader(),
      }
    );
  },
  getStudent: (param) => {
    const url = "/student/?c_id=" + param;
    return axiosClient.get(url, {
      headers: authHeader(),
    });
  },
  getTeacher: (param) => {
    const url = "/teacher/?c_id=" + param;
    return axiosClient.get(url, {
      headers: authHeader(),
    });
  },
  addUser: (param) => {
    const url = "/addUser";
    return axiosClient.post(
      url,
      {
        classId: param.c_id,
        email: param.email
      },
      {
        headers: authHeader(),
      }
    );
  },
  inviteUser: (param) => {
    const url = "/addUser/join";
    return axiosClient.post(
      url,{
        token: param.verifyCode
      }
    )
  },
  joinClassByCode: (params) => {
    const url = "/classes/join-class?classCode="+params.c_code+"&userId="+params.u_id;
    return axiosClient.post(
      url,{
        headers: authHeader()
      }
    )
  },

};
export default classroomAPI;
