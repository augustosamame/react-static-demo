import path from 'path'
import axios from 'axios'

export default {
  getRoutes: async () => {
    const { data: talent } = await axios.get(
      'https://tools.starsona.com/star_data_with_magic_links'
    )
    console.log('data from api: ', talent)

    return [
      {
        path: '/talent',
        getData: () => ({ talent }),
        children: talent.map(star => ({
          path: `/${star.id}`,
          template: 'src/containers/Star',
          getData: () => ({ star }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
