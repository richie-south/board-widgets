import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../store'

// move this to type file
type LatestFollower = {
  id: string
  picture: string
  name: string
}

type LatestComments = {
  id: string
  name: string
  picture: string
  comment: string
}

type Status = {
  fetch: 'success' | 'error' | 'loading'
  errorMessage?: string
  lastUpdated?: string
}
export type DataPointState = {
  likes: {
    data: number
    status: Status
  }
  latestFollowers: {
    followers: LatestFollower[]
    status: Status
  }
  latestComments: {
    comments: LatestComments[]
    total: number
    status: Status
  }
}

export type DataPointStateKeys = keyof DataPointState

const initialState: DataPointState = {
  likes: {
    data: 456,
    status: {
      fetch: 'loading',
    },
  },
  latestFollowers: {
    followers: [
      {
        id: '0',
        picture: 'https://picsum.photos/64',
        name: 'Lisa',
      },
      {
        id: '1',
        picture: 'https://picsum.photos/62',
        name: 'Johanna',
      },
      {
        id: '2',
        picture: 'https://picsum.photos/70',
        name: 'Gustaf',
      },
      {
        id: '3',
        picture: 'https://picsum.photos/63',
        name: 'Maria',
      },
      {
        id: '4',
        picture: 'https://picsum.photos/69',
        name: 'Erik',
      },
      {
        id: '5',
        picture: 'https://picsum.photos/68',
        name: 'Robert',
      },
      {
        id: '6',
        picture: 'https://picsum.photos/67',
        name: 'Sara',
      },
      {
        id: '7',
        picture: 'https://picsum.photos/66',
        name: 'Benny',
      },
      {
        id: '8',
        picture: 'https://picsum.photos/65',
        name: 'jessica',
      },
    ],
    status: {
      fetch: 'loading',
    },
  },
  latestComments: {
    comments: [
      {
        id: '0',
        picture: 'https://picsum.photos/64',
        name: 'Lisa',
        comment:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit arcu nullam facilisis varius tempor.',
      },
      {
        id: '1',
        picture: 'https://picsum.photos/62',
        name: 'Johanna',
        comment:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit arcu nullam facilisis varius tempor.',
      },
      {
        id: '2',
        picture: 'https://picsum.photos/70',
        name: 'Gustaf',
        comment:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit arcu nullam facilisis varius tempor.',
      },
      {
        id: '3',
        picture: 'https://picsum.photos/63',
        name: 'Maria',
        comment:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit arcu nullam facilisis varius tempor.',
      },
      {
        id: '4',
        picture: 'https://picsum.photos/69',
        name: 'Erik',
        comment:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit arcu nullam facilisis varius tempor.',
      },
      {
        id: '5',
        picture: 'https://picsum.photos/68',
        name: 'Robert',
        comment:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit arcu nullam facilisis varius tempor.',
      },
    ],
    total: 232,
    status: {
      fetch: 'loading',
    },
  },
}

export const dataPointSlice = createSlice({
  name: 'dataPoint',
  initialState,
  reducers: {
    updateLikes: (state, action: PayloadAction<number>) => {
      state.likes.data = action.payload
    },
    updateLikesStatus: (state, action: PayloadAction<Status>) => {
      state.likes.status = action.payload
    },

    updateLatestFollowers: (state, action: PayloadAction<LatestFollower[]>) => {
      state.latestFollowers.followers = action.payload
    },
    updateLatestFollowersStatus: (state, action: PayloadAction<Status>) => {
      state.latestFollowers.status = action.payload
    },

    updateLatestComments: (state, action: PayloadAction<LatestComments[]>) => {
      state.latestComments.comments = action.payload
    },
    updateLatestCommentsStatus: (state, action: PayloadAction<Status>) => {
      state.latestComments.status = action.payload
    },
  },
})

export const selectDataPointLikes = (state: RootState) => state.dataPoint.likes
export const selectDataPointLatestFollowers = (state: RootState) =>
  state.dataPoint.latestFollowers
export const selectDataPointLatestComments = (state: RootState) =>
  state.dataPoint.latestComments
