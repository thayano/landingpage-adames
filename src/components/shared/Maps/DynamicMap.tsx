// DynamicMap.tsx
'use client'
import dynamic from 'next/dynamic';
import { LatLngExpression } from 'leaflet';

interface DynamicMapProps {
  location: LatLngExpression;
  order?: string;
  children: React.ReactNode;
}

const DynamicMap = dynamic(() => import('./map.componente'), {
   ssr: false 
});

const ClientMap: React.FC<DynamicMapProps> = ({ location, order, children }) => {
  // eslint-disable-next-line react/no-children-prop
  return <DynamicMap location={location} order={order} children={children} />;
};

export default ClientMap;