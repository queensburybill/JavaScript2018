import * as types from "./constants/actionTypes";

export function login(id, pin) {
    return {
        type: types.LOGIN,
        id: id,
        pin: pin
    };
}

export function submitVote(category, index) {
    return {
        type: types.SUBMIT_VOTE,
        category: category,
        index: index
    };
}

export function postponeVote() {
    return {
        type: types.POSTPONE_VOTE
    };
}

export function finishVoting(id) {
    return {
        type: types.FINISH_VOTING,
        id: id
    };
}

