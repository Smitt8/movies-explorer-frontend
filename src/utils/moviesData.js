const movies = [
  {
    _id: 1,
    nameRU: 'Криминальное чтиво',
    duration: '154 минуты',
    thumbnail: 'https://kinopoisk-ru.clstorage.net/e1y46K221/1a4ba6wTH_ub/FozCbaEmfkqaVr2uwrIn0Xb071EzhYC62qzUKcL6AfjLmrM_uFPwCYNtbShl1EIZAA0vqrkBmR6xfyA9sns_viLpl5kF5s5vfvJ9q3K3Y1AGAesl5wC0-wuZ0cwwCQN76Q2RXErR8s-XCYlZgBFXfQSIrx7c0C2vplzBKle-epuF3XAs5SSOS97lPawAgMbE14X9lUME41wbvzargWqgWXncQq34ILFtFtl4jvDj9xzHGj6_HAavD_XsZ7rWbGgZZw5xXjV3PzvsNA_PMdKmlDbVLbew55K-Wbxl-8GIoyirPXG9SUDxXmVYOv9RAJctZMjuH85V7_2lbmeKt80oGYWcMY3XhT9J3vcM3NFSFpSmto7V8zajDjh-ZGvyWVIb629BHhtTEt2XKfhN8gLFbaVqTa6-Np_Nl7-UK8d9CWhGTFNcBuYeiuw0L-7wgddGprfMdfE3MX-ajUZYcJtSOlk9cY1YsePPxIo7PlITdKzG2mwtzwdsnaeMV6pW_xm75k1ATaTE7usMxlz-cuMEhTbnzIUCpfOeK31m2SMYkAkZTEP8KzFAbETLW61R0se_t2pvPfyWLexUzXV5dd2YCzUsku8U1r5JbfUfTvKRRtemxq6HYrbA7Rkvdtlzu8HY6w5S7TlAgg812nod4CFXTJYZz69PZC8ch30FGFR9-ngFHIJcdLQ-GR3Hvu1S0GQGx3aOdLFXE68rbdabcbuSSIo_4S5aksLMNNoavHBiZ_00Gg09_paPHhTN5oh1_xo7hSxzLjcGHSmeRq_Ns5Lm1YQmzodglxLfeR42-LGIovnL_DOPyxGzTbbryl7A81YctJp9zHyUjHxkrHfadX6pWxWekB4mlM9ZLdWvLbAwtJXllB8GoaWS_ziexlqjqqA5uIwD3dvB410kajqvsEHWjnUYv7xNR8-MFR-F2fdt-6knfmLcpbfcGM5XfvwwsERFFEUdZJF18szpT9fpAchRCRhcse_4YKCPhEpZbQExlz8F6ywvrjZsr7WflFgHTVor5m5zHfX076iOllwtgaKmJedX7YdztUN-6y_VyqC50Dub3qIPSiNSb5aYW4_zsdQ_pbjNTcwH3P4H3UXrxO8Zm7ScAg7E5Z9J_jcOjLIQR0SXh7yX88VRPKiNF6sRKZHaiZzyn-oT4y5G-lku8QK0zPa6vU6vVG5_1dwGGqe9aov2vrPdpJWsK_wlT--DsjT21sSth9E1MeyYTpfpEXpBO1o-gb4rEJEfJQmrf-MAl6yUK11_DeZ9LDUcpznl3YnbFK-y3HVFnYkPJ89dg8NUNYc13VfRBpK-WH1H6wDqU5q57CFuKlCw7zbKeG7ygSW8lTncvO6krG_1v5dahkyrW4Utwx5n9o-I_lVM_0BCJ_SXVaxkYmey7iqcFqvS-mAZqExzfksgw1wGauhcMHHWPXVrbu6fdV4OFv1nu4esmDg1riG_1ofOi_-3rJ5xUKSU5tSuV7Dk83-qfvRbsTpie6v-Qu-asUIc9spKPACwpzzXGkyuvOQsX6QNZwuk_srJ1L6C7kcETIuP9E7e04P1dKW2_DaitoDveE8HucD4Yyk4jQIsSgHCzOTKy2xhsres9ep8Dx1njb_GLmXZRK35iWe_om5klP4ZLffenTBStxcmtR9XAXdCzWp9JYpyu2EbW9zRPAhh4k3W-WqMIfO2nWU6306vxr0vV1wESpSt-auEv0At1RYOSPyV7hzgY0bmljWOZpK3MR54zuY5QQuhiPg-U9_rIXLNVPq5LnDA5sz16B9uTQePDjTNl2n2rbpYh15Db4Rlnxj9tRyO8tP0pReW7icDppGuqiy0OjCLcjrLHECvOUNBLDcpmSwxkqdNRwk-rG1kPtwGDnRZdKzoSJWO8y_FVY55DlR-znHzFpfnVY6HQWUxnUsdBfhCyXJK6W6QzcozUi40-iuu4hOVL2UYbU0spm7ep23EK7b_GHkW78Aeh5QfSTwWLSzB8VcUplfel2PWQ-1rXleao1gjC1gtQv-LAWJuVDh47cJA12yFS00Nzgff7iQPZCm0ruoYVe2zXfXmLUj9Nj-tADH2tKTEHRUzdFPvWj80-4GJU-k6bRLNCsOQTGUIeG2TgPU-piifnk9HbJ3HLrZ5hW_b-pXf4e-FJQ9JvZYcjjOxZfSlVu7XMYcAjnt81GqjWJJL208T_YtBog0EOkrtErGH3Jbp3X3O1p_eFe9XufUM-8lH3mFvxpXtWt23D45BYqcHhFU-NyNW4mz7HRVrwwoTuItcsyw6oQD9lSlbb7OwxS-ny1-d3uffH1fdhavknwopF72jnlSW_Wt812zfciBnJUV333TilcK9qAwl6aF4s_j6XHO_KUMjfAVLeF4yMZUNJ2ovLM1mD893jnXr1q2LaeTuct7F9v5Lj_RNf6Jw9qflFS9ngZURzBs_d5tjisGbWe8RfOlDYS8GulrNMcLUnGcr__-PxJwvl-3XWKb9mFsXvjLsh0R--c50bJ2gIicUhocvBGLkcN9YXORrARuz6smOgwx5AOEOd2t6TmJAVM-G6m6Ofzfcvaftt4l1z2nptExzb9dmLhrvJV08gcPlVjZmDzdDF7McSg_XSbMKgfnKDONPy1MgDYcoaU3j0RcMdJlN_QwkbL5VzGQKp9-7iVZOIB_11a4rPccM_DDiFxc1NiynAoRArwlMdgsBqpHbuY7w76qzIO8Gi8oc4oNHvpVKPpy89J0MV443u2bPing3_HHMJKQtSNyVz39T0TRHRuRcppD3k89qfIWooquDWrovAg7L48E-Jpn7PcAy9IzHep8PrhYtvMftlIp3P9rrJd1w3nVl_Ejs9T2NgtLEBdUUXNRTp-KuaD8WCnKogfkrD-HfqiITb0QKOk0ycxb_NxgMrK00vf2nnCebpG5K6Ua-sy8UZ9zpbxfc3EHQlWeFtEzF8nTAjtuO1qoBOAHbe09D3cgS8z8G6DlNI6LH7YSob16Olj8uQ',
    saved: true,
  },
  {
    _id: 2,
    nameRU: 'Джанго освобожденный',
    duration: '165 минут',
    thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b7d77143-158c-4c30-bcd9-7b94182492b0/600x900'
  },
  {
    _id: 3,
    nameRU: 'Бешеные псы',
    duration: '100 минут',
    thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/b1add366-9e49-4ad8-905a-46ca23da8adc/600x900',
    saved: true,
  },
  {
    _id: 4,
    nameRU: 'Бесславные ублюдки',
    duration: '153 минуты',
    thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/5e6dde98-74a8-4c02-b003-01d48e091025/600x900',
  },
  {
    _id: 5,
    nameRU: 'Убить Билла: Кровавое дело целиком',
    duration: '247 минуты',
    thumbnail: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/615d7139-d0a3-473f-9e02-3e6b05d6c1ce/600x900',
  }
]

export default movies;