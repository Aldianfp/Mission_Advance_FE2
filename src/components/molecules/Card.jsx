import { Link } from "react-router-dom";

export default function Card({
  id,
  title,
  subtitle,
  avatar,
  person,
  personjob,
  price,
  photos,
}) {
  const defaultAvatar = avatar || "https://via.placeholder.com/50";
  const defaultPerson = person || "Unknown Person";
  const defaultPersonJob = personjob || "Unknown Job";
  const defaultPrice = price || "Gratis";
  const defaultPhoto = photos || "https://via.placeholder.com/300";

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer w-full">
      <Link to={`/content/${id}`}>
        <div className="relative">
          <img
            src={defaultPhoto}
            alt={title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-500 text-sm mb-4">{subtitle}</p>

          <div className="flex items-center mb-4">
            <img
              src={defaultAvatar}
              alt={defaultPerson}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="text-sm">
              <p className="font-medium text-gray-900">{defaultPerson}</p>
              <p className="text-gray-400">{defaultPersonJob}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center text-yellow-400">
              <span className="text-sm">
                ★★★★☆
                <span className="ml-2 text-gray-500 text-xs">(3.5 86)</span>
              </span>
            </div>
            <p className="text-green-500 text-xl font-semibold">
              {defaultPrice}K
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
