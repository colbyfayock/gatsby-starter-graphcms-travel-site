import { useDestinations } from 'hooks';

export default function useDestination({ byId }) {
  const { destinations } = useDestinations();

  const destination = destinations.find(({ id } = {}) => id === byId );

  return {
    destination,
  };
}
