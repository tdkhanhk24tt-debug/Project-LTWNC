import User from "./user";
import avatar1 from "../assets/avatar1.jpg";
function UserList() {
  const users = [
    {
      name: "Trần Đình Khánh",
      dvi: "Phòng Kế toán",
      avatar: avatar1,
    },
    {
      name: "Trương Gia Huy",
      dvi: "Phòng Nhân sự",
      avatar: avatar1,
    },
    {
      name: "Phan Thanh Thành",
      dvi: "Phòng IT",
      avatar: avatar1,
    },
    {
      name: "Phạm Tạ Quốc Thịnh",
      dvi: "Marketing",
      avatar: avatar1,
    },
    {
      name: "Lưu Thị Ngọc Lành",
      dvi: "Kinh doanh",
      avatar: avatar1,
    },
    {   
      name: "Nguyễn Thảo Uyên",
      dvi: "Chăm sóc khách hàng",
      avatar: avatar1,
    },
    {
      name: "Nguyễn Quốc Cường",
      dvi: "Logistics",
      avatar: avatar1,
    },
    {
      name: "A Ngọc Kiểm",
      dvi: "Hành chính",
      avatar: avatar1,
    },
    {
      name: "A Tuấn",
      dvi: "Kỹ thuật",
      avatar: avatar1,
    },
  ];
  return (
    <div className="user-list">
      {users.map((user) => (
        <User
          avatar={user.avatar}
          name={user.name}
          dvi={user.dvi}
        />
      ))}
    </div>
  );
}

export default UserList;