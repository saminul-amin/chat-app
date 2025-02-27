import avatar from "../../assets/avatar.svg";

const Dashboard = () => {
  const contacts = [
    {
      name: "John",
      status: "Available",
      img: avatar,
    },
    {
      name: "Alex",
      status: "Available",
      img: avatar,
    },
    {
      name: "Maria",
      status: "Available",
      img: avatar,
    },
    {
      name: "Dane",
      status: "Available",
      img: avatar,
    },
    {
      name: "Nathan",
      status: "Available",
      img: avatar,
    },
    {
      name: "Polard",
      status: "Available",
      img: avatar,
    },
  ];

  return (
    <div className="w-screen flex">
      <div className="w-1/4 h-screen bg-secondary">
        <div className="flex items-center mx-14 my-8">
          <div className="border border-primary p-[2px] rounded-full">
            <img src={avatar} alt="" width={75} height={75} />
          </div>
          <div className="ml-8">
            <h3 className="text-2xl">Md. Saminul Amin</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-14 mt-10">
          <div className="text-primary text-lg">Messages</div>
          <div>
            {contacts.map(({ name, status, img }) => {
              return (
                <div className="flex items-center py-8 border-b border-b-gray-300">
                  <div className="cursor-pointer flex items-center">
                    <div>
                      <img src={img} alt="" height={60} width={60} />
                    </div>
                    <div className="ml-8">
                      <h3 className="text-2xl">{name}</h3>
                      <p className="text-lg font-light">{status}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
