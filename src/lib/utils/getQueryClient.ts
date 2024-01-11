import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

const getQueryClient = cache(() => new QueryClient()) as () => QueryClient;
export default getQueryClient;
