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

