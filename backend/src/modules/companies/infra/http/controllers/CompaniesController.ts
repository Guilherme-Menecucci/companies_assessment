import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCompaniesService from '@modules/companies/services/ListCompaniesService';

export default class CompaniesController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listCompanies = container.resolve(ListCompaniesService);

    const companies = await listCompanies.execute();

    return res.json({ companies });
  }
}
