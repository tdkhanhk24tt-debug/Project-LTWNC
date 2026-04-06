import User from "./user";
import Clickme from '../components/Clickme'
{/*import {Appp} from '../components/useEffect';*/}
import EffectDemo from '../components/useState'
const images = import.meta.glob("../assets/*.jpg", { eager: true });
const avatars = Object.values(images);
function UserList() {
  const users = [
    {
      name: "Trần Đình Khánh",
      dvi: "Phòng Kế toán",
      avatar: avatars[1].default,
    },
    {
      name: "Trương Gia Huy",
      dvi: "Phòng Nhân sự",
      avatar: avatars[2].default,
    },
    {
      name: "Phan Thanh Thành",
      dvi: "Phòng IT",
      avatar: avatars[3].default,
    },
    {
      name: "Phạm Tạ Quốc Thịnh",
      dvi: "Marketing",
      avatar: avatars[4].default,
    },
    {
      name: "Lưu Thị Ngọc Lành",
      dvi: "Kinh doanh",
      avatar: avatars[5].default,
    },
    {   
      name: "Nguyễn Thảo Uyên",
      dvi: "Chăm sóc khách hàng",
      avatar: avatars[6].default,
    },
    {
      name: "Nguyễn Quốc Cường",
      dvi: "Logistics",
      avatar: avatars[7].default,
    },
    {
      name: "A Ngọc Kiểm",
      dvi: "Hành chính",
      avatar: avatars[8].default,
    },
    {
      name: "A Tuấn",
      dvi: "Kỹ thuật",
      avatar: avatars[9].default,
    },
  ];
  return (
    <div className="user-list">
      {users.map((user, id) => (
        <User
          key={id}
          avatar={user.avatar}
          name={user.name}
          dvi={user.dvi}
        />
      ))}
      <Clickme/>
      {/*<Appp/>*/}
      <EffectDemo/>
    </div>
  );
}

export default UserList;