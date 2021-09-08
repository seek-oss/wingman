export const startCursorPaginatedBrandsFirstPage =
  'global:advertisementBrandingCursor:indirectBranding:start1';
export const endCursorPaginatedBrandsFirstPage =
  'global:advertisementBrandingCursor:indirectBranding:end1';
export const startCursorPaginatedBrandsSecondPage =
  'global:advertisementBrandingCursor:indirectBranding:start2';
export const endCursorPaginatedBrandsSecondPage =
  'global:advertisementBrandingCursor:indirectBranding:end2';
export const startCursorPaginatedBrandsLastPage =
  'global:advertisementBrandingCursor:indirectBranding:start3';
export const endCursorPaginatedBrandsLastPage =
  'global:advertisementBrandingCursor:indirectBranding:end3';

export const mockPaginatedBrandsOnlyOnePage = {
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: 'global:advertisementBrandingCursor:indirectBranding:11111111',
    endCursor: 'global:advertisementBrandingCursor:indirectBranding:2VeXEUas',
  },
  edges: [
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:MjHScMntyZKfPPKv37EqAn',
        },
        name: 'Evil Corp - no cover image',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/8ac4cc174c590cebc676f827e4fd40e9a32dbd8f',
          },
          {
            typeCode: 'CoverImage',
            url: '',
          },
        ],
      },
    },
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:4pkLmqYhoSxSKmfcKMbDG6',
        },
        name: 'SEEK - macbook & glasses (green)',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/27ecca452d06d960b596aa40380f0d06c56b6ba8',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/7a2b5aa53d67c7c6d0eeae95bfa56d9b2f5ac228',
          },
        ],
      },
    },
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:CNEHkUP51vvPyYuBwfQw7u',
        },
        name: 'SEEK - keepcup and black briefcase',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/c992ad63df1d614b878006689b15c513a5d34921',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/6982ec4631478a84e338817906a17196d41484ee',
          },
        ],
      },
    },
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:MD2FWYzmVd4p5Bs1pFEddd',
        },
        name: 'SEEK - keyboard, calculator & notebook',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/4b32cf3355bcdbbdf10294aa6101687de16c0588',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/3715be0437f2badc4c50f877396241b1f0af112e',
          },
        ],
      },
    },
  ],
};

export const mockPaginatedBrandsFirstPage = {
  pageInfo: {
    hasNextPage: true,
    hasPreviousPage: false,
    startCursor: startCursorPaginatedBrandsFirstPage,
    endCursor: endCursorPaginatedBrandsFirstPage,
  },
  edges: [
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:MjHScMntyZKfPPKv37EqAn',
        },
        name: 'Evil Corp - no cover image',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/8ac4cc174c590cebc676f827e4fd40e9a32dbd8f',
          },
          {
            typeCode: 'CoverImage',
            url: '',
          },
        ],
      },
    },
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:4pkLmqYhoSxSKmfcKMbDG6',
        },
        name: 'SEEK - macbook & glasses (green)',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/27ecca452d06d960b596aa40380f0d06c56b6ba8',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/7a2b5aa53d67c7c6d0eeae95bfa56d9b2f5ac228',
          },
        ],
      },
    },
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:CNEHkUP51vvPyYuBwfQw7u',
        },
        name: 'SEEK - keepcup and black briefcase',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/c992ad63df1d614b878006689b15c513a5d34921',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/6982ec4631478a84e338817906a17196d41484ee',
          },
        ],
      },
    },
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:MD2FWYzmVd4p5Bs1pFEddd',
        },
        name: 'SEEK - keyboard, calculator & notebook',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/4b32cf3355bcdbbdf10294aa6101687de16c0588',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/3715be0437f2badc4c50f877396241b1f0af112e',
          },
        ],
      },
    },
  ],
};

export const mockPaginatedBrandsSecondPage = {
  pageInfo: {
    hasNextPage: true,
    hasPreviousPage: true,
    startCursor: startCursorPaginatedBrandsSecondPage,
    endCursor: endCursorPaginatedBrandsSecondPage,
  },
  edges: [
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:4YsFiFRekSvuKjLzRUtmZH',
        },
        name: 'RyanAir - plane',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/6057509549dc838d6c3c518f0557c77fdbbdb1a7',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/d41de53cab6df901401b054a1185c786b7ac6526',
          },
        ],
      },
    },
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:2P8WhewQF4dnZNYRKMDv1r',
        },
        name: 'RyanAir - blue cover image',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/2a4d048b3844bd5f771d0b22d55e3bab125c53a6',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/092f3e7154538e84fbc39b169f8e6e74d9c3655e',
          },
        ],
      },
    },
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:VQ9aAzkhogAMSw3AF31stC',
        },
        name: 'SEEK EDC',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/f154d446456c99cc3100df6df37676935f8bc340',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/870108007f0cf52865e3213ff6bc43a83b7948a1',
          },
        ],
      },
    },
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:D557J8rpyMKpP9DxrWg2s',
        },
        name: 'Vicinity Research Test',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/3681be7f69896fe765b83f8e68e9a9ffc10ec463',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/e9465179f03c690a90df96f200a57922a3acdb43',
          },
        ],
      },
    },
  ],
};

export const mockPaginatedBrandsLastPage = {
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: true,
    startCursor: startCursorPaginatedBrandsLastPage,
    endCursor: endCursorPaginatedBrandsLastPage,
  },
  edges: [
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:qVe8DCsXJP9zNHsmcmEyL',
        },
        name: 'Spotlight - test',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/3898c15b5a25be008943b96e33ed52cb2a638530',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/e1bf1f1b00dcdc9f70e7452ac47d319e7dc15685',
          },
        ],
      },
    },
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:7yQLDLdqz9phfe9j1GHDgn',
        },
        name: 'Car sales research test',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/ddd3210f24034102cd16a4f5266ff2d47f5324ad',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/6738b6b7478f28388f13b009ed40594f45ff9905',
          },
        ],
      },
    },
    {
      node: {
        id: {
          value:
            'global:advertisementBranding:hirerBranding:33Y863h6sCnrCFk97w9bvg',
        },
        name: 'AMA Group',
        images: [
          {
            typeCode: 'OriginalLogo',
            url: 'https://image-service-cdn.seek.com.au/953366f5bddc47ae3f0b3c9ab4b31d70dbaa9b66',
          },
          {
            typeCode: 'CoverImage',
            url: 'https://image-service-cdn.seek.com.au/48b638dd6fd5f7a8fa519426484497fc1e590b2d',
          },
        ],
      },
    },
  ],
};
