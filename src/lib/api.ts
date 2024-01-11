export const getSummaryStats = () => {
  return Promise.resolve({
    promotions: 427,
    categories: 8,
    newCompanies: 28,
    activeCompanies: 670,
  });
};

export const getSummarySales = () => {
  const items = [];
  for (let i = 0; i < 6; i++) {
    items.push({
      companyId: i + 1,
      companyTitle: 'Costco Wholesale',
      sold: 459,
      income: 600,
    });
  }

  return Promise.resolve(items);
};

export const getSummaryPromotions = () => {
  const items = [];
  for (let i = 0; i < 7; i++) {
    items.push({
      promotionId: i + 1,
      promotionName: 'Lorem ipsum dolor',
      companyTitle: 'Costco Wholesale',
      discount: 40,
    });
  }

  return Promise.resolve(items);
};

export const getSummaryCategories = () => {
  return Promise.resolve([
    {
      categoryId: 1,
      categoryTitle: 'Products',
      count: 4,
    },
    {
      categoryId: 2,
      categoryTitle: 'Products',
      count: 8,
    },
    {
      categoryId: 3,
      categoryTitle: 'Products',
      count: 26,
    },
    {
      categoryId: 4,
      categoryTitle: 'Products',
      count: 1,
    },
    {
      categoryId: 5,
      categoryTitle: 'Products',
      count: 37,
    },
    {
      categoryId: 6,
      categoryTitle: 'Products',
      count: 22,
    },
    {
      categoryId: 7,
      categoryTitle: 'Products',
      count: 4,
    },
    {
      categoryId: 8,
      categoryTitle: 'Products',
      count: 4,
    },
  ]);
};

export const getSummaryCountries = () => {
  return Promise.resolve([
    {
      countryId: 1,
      countryTitle: 'Canada',
      count: 4,
    },
    {
      countryId: 2,
      countryTitle: 'USA',
      count: 4,
    },
    {
      countryId: 3,
      countryTitle: 'Italia',
      count: 2,
    },
    {
      countryId: 4,
      countryTitle: 'Ukraine',
      count: 2,
    },
    {
      countryId: 5,
      countryTitle: 'Spain',
      count: 2,
    },
  ]);
};
