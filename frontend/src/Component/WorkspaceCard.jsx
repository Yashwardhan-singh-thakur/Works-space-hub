import { Star } from "lucide-react";
import { Link } from "react-router-dom";

function WorkspaceCard({
  id,
  title = "Downtown Workspace",
  listingImage = "https://imgs.search.brave.com/S38smYRwFSImxRktm30Z-g3mo7k97QoBj6OmRB2rKP4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzIyLzM0Lzk2/LzM2MF9GXzYyMjM0/OTY5OF9Qeld0bXVz/elZzNVJUQzBkTmIy/d2t1dE05ZmRqcHFF/TC5qcGc",
  location = "456 Business Avenue, San Francisco",
  country = "United States",
  avgRating = 4.7,
  tags = ["Private Office", "24/7 Access", "Printing"],
  price = 45,
  priceUnit = "hour",
  isPopular = true,
}) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 hover:scale-105 transition-transform duration-300">
      <Link to={`/workspace/${id}`}>
        {" "}
        <div className="h-full rounded-lg overflow-hidden shadow-md bg-white transition-shadow duration-300 hover:shadow-lg">
          {/* Image section */}
          <div
            className="relative h-48 bg-gray-200"
            style={{
              backgroundImage: `url(${listingImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {isPopular && (
              <div className="absolute top-2 right-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                  Popular
                </span>
              </div>
            )}
          </div>

          {/* Content section */}
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium truncate pr-2">{title}</h3>
              <div className="flex items-center flex-shrink-0">
                <Star size={16} fill="gold" color="gold" className="mr-1" />
                <span className="text-amber-500 font-medium">{avgRating}</span>
                <span className="text-gray-500 text-sm ml-1">
                  {/* Only show reviews parentheses if reviews exist */}
                  {typeof reviews !== "undefined" && `(${reviews})`}
                </span>
              </div>
            </div>

            <p className="text-gray-600 mb-2 truncate">{location}</p>
            <p className="text-gray-500 mb-3 text-sm">{country}</p>

            <div className="flex gap-2 mb-3 flex-wrap">
              {tags &&
                tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-purple-700 bg-purple-50 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold text-lg">${price}</span>
                <span className="text-gray-500"> / {priceUnit}</span>
              </div>
              <button className="text-purple-600 font-medium hover:underline">
                View Details
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default WorkspaceCard;
