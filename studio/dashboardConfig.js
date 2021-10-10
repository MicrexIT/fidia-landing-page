export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6162e7e6367fbbe2f9585c73',
                  title: 'Sanity Studio',
                  name: 'fidia-landing-page-studio',
                  apiId: '181140f2-f818-4196-9d16-25d60b156035'
                },
                {
                  buildHookId: '6162e7e631ee6cf7b91c7788',
                  title: 'Landing pages Website',
                  name: 'fidia-landing-page',
                  apiId: '875c1ff7-2d55-4dab-8674-c2b304ffbfc1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MicrexIT/fidia-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://fidia-landing-page.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
