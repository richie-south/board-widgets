type SingleDataPointWidgetTheme = {
  dataPointColor: string
  title: string
  subtitle: string
}

export interface Theme {
  board: {
    plate: string
  }

  widgetBase: {
    boxShadow: string
    radius: number
    padding: number
    plate: string
    text: string
  }

  widgets: {
    likes: {
      plate?: string
      singleDataPointWidgetTheme?: SingleDataPointWidgetTheme
    }
    latestFollowers: {
      plate?: string
      title: string
      name: string
      itemPlate: string

      singleDataPointWidgetTheme?: SingleDataPointWidgetTheme
    }
    latestComments: {
      plate?: string
      title: string
      name: string
      commment: string
      singleDataPointWidgetTheme?: SingleDataPointWidgetTheme
    }
  }

  baseWidgets: {
    singleDataPointWidget: SingleDataPointWidgetTheme
  }
}

export const defaultTheme: Theme = {
  board: {
    plate: 'white',
  },

  widgetBase: {
    boxShadow:
      '0px 4px 28px rgb(168 168 168 / 25%), 0px 4px 10px rgb(169 169 169 / 22%)',
    radius: 12,
    padding: 16,
    plate: 'white',
    text: 'black',
  },

  widgets: {
    likes: {
      plate: '#FEF8E6',
      singleDataPointWidgetTheme: {
        dataPointColor: '#0D0F1C',
        title: '#0D0F1C',
        subtitle: '#9E9F9A',
      },
    },
    latestFollowers: {
      plate: '#D3F1E3',
      title: '#0d0f1c',
      name: '#0d0f1c',
      itemPlate: 'white',
    },
    latestComments: {
      plate: '#b57db1',
      title: 'white',
      name: '#7e587c',
      commment: 'white',
      singleDataPointWidgetTheme: {
        dataPointColor: '#7e587c',
        title: 'white',
        subtitle: 'white',
      },
    },
  },

  baseWidgets: {
    singleDataPointWidget: {
      dataPointColor: 'black',
      title: 'black',
      subtitle: 'black',
    },
  },
}

export const darkTheme: Theme = {
  board: {
    plate: '#141414',
  },

  widgetBase: {
    boxShadow:
      '8px 5px 28px rgb(188 188 188 / 24%), 2px 4px 10px rgb(188 188 188 / 24%)',
    radius: 12,
    padding: 16,
    plate: '#FC8C34',
    text: 'white',
  },

  widgets: {
    likes: {
      plate: '#51E0B3',
    },
    latestFollowers: {
      plate: '#0e0e0e',
      title: 'white',
      name: 'white',
      itemPlate: 'black',
    },
    latestComments: {
      plate: 'black',
      title: 'white',
      name: 'white',
      commment: 'white',
      singleDataPointWidgetTheme: {
        dataPointColor: 'white',
        title: 'white',
        subtitle: 'white',
      },
    },
  },

  baseWidgets: {
    singleDataPointWidget: {
      dataPointColor: 'black',
      title: 'black',
      subtitle: 'black',
    },
  },
}

export type AvailableThemes = 'dark' | 'default'
export const themes: {
  [key in AvailableThemes]: Theme
} = {
  dark: darkTheme,
  default: defaultTheme,
}
