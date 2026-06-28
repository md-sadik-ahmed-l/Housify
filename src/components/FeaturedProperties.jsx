import Link from "next/link";
import Image from "next/image";

const FeaturedProperties = ({ featuredProperties }) => {
    
  console.log(featuredProperties);
  console.log(Array.isArray(featuredProperties));

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Featured Properties</h2>
          <p className="text-gray-500 mt-3">
            Explore our latest approved rental properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties?.map((property) => (
            <div
              key={property?._id}
              className="rounded-xl border overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
            >
              <Image
                src={property.image}
                alt={property.title}
                width={500}
                height={350}
                className="w-full h-60 object-cover"
              />

              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{property.title}</h3>

                <p className="text-gray-500">{property.location}</p>

                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">
                    ${property.price}/year
                  </span>

                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
                    {property.propertyType}
                  </span>
                </div>

                <Link
                  href={`/all-properties/${property._id}`}
                  className="mt-4 block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
