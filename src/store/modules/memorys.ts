//
//  memorys.ts
//  react-calc
//
//  Created by Yukihira Nanako on 27/08/2019.
//  Copyright © 2019 Yukihira Nanako. All rights reserved.
//

export interface MemoryDataParams {
  data: number
}

export const SAVE = "memory/SAVE"
export const PLUS = "memory/PLUS"
export const MINUS = "memory/MINUS"
export const CLEAR = "memory/CLEAR"

interface SaveAction {
  type: typeof SAVE
  payload: MemoryDataParams
}

interface PlusAction {
  type: typeof PLUS
  meta: {
    data: number
  }
}

interface MinusAction {
  type: typeof MINUS
  meta: {
    data: number
  }
}

interface ClearAction {
  type: typeof CLEAR
  payload: MemoryDataParams
}

export type ActionTypes =
  | SaveAction
  | PlusAction
  | MinusAction
  | ClearAction

// actions

function save(data: number) {
  return {
    type: SAVE,
    payload: { data }
  }
}

function plus() {

}
