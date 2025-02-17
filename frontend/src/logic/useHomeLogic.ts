import { useEffect, useState } from 'react';
import axios from 'axios';

import { TCompany } from '../types/_api';

import { getAllCompanies, abortApiController } from '../lib/api/company/getAll';
import { useToast } from '../lib/context/toast.context';
import processCompanies from '../lib/api/company/processCompanies';

function useHomeLogic() {
  const [companies, setCompanies] = useState<TCompany[]>([]);
  const [expandedIndustries, setExpandedIndustries] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState<boolean>(true);

  const { addToast } = useToast();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const response = await getAllCompanies();
        setCompanies(response.data.companies.items);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request cancelled:', err.message);
        } else {
          addToast({
            type: 'error',
            description: 'Failed to fetch companies. Please try again later.',
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();

    return () => abortApiController.abort();
  }, []);

  const groupedCompanies = processCompanies(companies);

  return {
    groupedCompanies,
    loading,
    expandedIndustries,
    setExpandedIndustries,
  };
}

export default useHomeLogic;
