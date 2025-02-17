import { TCompanies } from '../../../types/_api';
import api from '../../services/api';

const abortApiController = new AbortController();

async function getAllCompanies() {
  const result = await api.get<{ companies: TCompanies }>('/companies', {
    signal: abortApiController.signal,
  });

  return result;
}

export { abortApiController, getAllCompanies };
