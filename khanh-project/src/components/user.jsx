function User({ avatar, name, dvi }) {
  return (
    <div>
      <img className="logo" src={avatar} alt={name} />
      <p>Họ và tên: {name}</p>
      <p>Đơn vị: {dvi}</p>
      <button>Xem chi tiết</button>
    </div>
  );
}

export default User;