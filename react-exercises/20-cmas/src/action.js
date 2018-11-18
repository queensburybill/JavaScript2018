import * as types from "./constants/actionTypes";

export function login(id, pin) {
    return {
        type: types.LOGIN,
        id: id,
        pin: pin
    };
}

export function getNominees() {
    return {
        type: types.GET_NOMINEES
    };
}

export function submitVote(categoryNumber, index) {
    return {
        type: types.SUBMIT_VOTE,
        category: categoryNumber,
        index: index
    };
}

export function finishVoting(id) {
    return {
        type: types.FINISH_VOTING,
        id: id
    };
}

