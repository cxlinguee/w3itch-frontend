import { AccountEntity, UserEntity } from 'types'

import type {
  Community,
  GameEngine,
  GameFileCharset,
  GamesListSortBy,
  Genre,
  PaymentMode,
  ProjectClassification,
  ReleaseStatus,
} from './enum'

declare namespace Api {
  type UploadToIPFS = {
    hash: string
    hashV0: string
    key: string
    bucket: string
    publicUrl: string
  }

  type GameProjectsParams = {
    username?: string
    limit?: number
    page?: number
    sortBy?: GamesListSortBy
    order?: 'ASC' | 'DESC'
  }

  type GameProjectDto = {
    title: string
    paymentMode: PaymentMode
    subtitle: string
    gameName: string
    charset: GameFileCharset
    classification: ProjectClassification
    kind: GameEngine
    releaseStatus: ReleaseStatus
    screenshots: string[]
    cover: string
    tags: string[]
    tokenId: number
    appStoreLinks: string[]
    description: string
    community: Community
    genre: Genre
  }

  type Tag = {
    id: number
    createdAt: Date
    updatedAt: Date
    name: string
    label: string
    description: string
  }

  type GameProjectsRatingResponse = {
    id: number
    createdAt: Date
    updatedAt: Date
    gameId: number
    username: string
    rating: number
  }

  type AccountsMetamaskVerificationCodeResponse = {
    code: string
  }

  type AccountsMetamaskActionResponse = {
    user: UserEntity
    account: AccountEntity
  }
}
