import { getPropertyById } from '@/lib/api/property';
import PropertyClient from './PropertyClient';
import { getUserSession } from '@/lib/core/session';

const PropertyDetailsPage = async ({ params }) => {

    const user = await getUserSession();
  const { id } = await params;

  const data = await getPropertyById(id);
  const property = data?.data || data;

  console.log(property)

  if (!property) return <div>Not found</div>;

  return <PropertyClient user={user} property={property} />;
};

export default PropertyDetailsPage;


// import { getPropertyById } from '@/lib/api/property';
// import React from 'react';

// const PropertyDetailsPage = async ({params}) => {

//     const {id } = await params;

    
//   const data = await getPropertyById(id);

//   const property = data?.data || data;

//   console.log(property)

//   if (!property) {
//     return <div className="text-white">Property not found</div>;
//   }

//   return (
//     <div className="text-black">
//       <h1 className="text-3xl text-black font-bold">{property.title}</h1>
//       <img src={property.image} className="w-full max-w-xl mt-4 rounded-xl" />
//       <p className="mt-4">{property.description}</p>
//     </div>
//   );
// };

// export default PropertyDetailsPage;





