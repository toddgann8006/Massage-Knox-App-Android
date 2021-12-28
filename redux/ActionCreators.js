import * as ActionTypes from './ActionTypes';

export const addNewuser = newuser => ({
    type: ActionTypes.ADD_NEWUSER,
    payload: newuser
});

export const postNewuser = newuser => dispatch => {
    const newUserReward = newuser

    setTimeout(() => {
        dispatch(addNewuser(newUserReward))
    });
};

export const addEmail = email => ({
    type: ActionTypes.ADD_EMAIL,
    payload: email
});

export const postEmail = email => dispatch => {
    const newEmail = email

    setTimeout(() => {
        dispatch(addEmail(newEmail));
    }, 2000);
};

export const addReward = reward => ({
    type: ActionTypes.ADD_REWARD,
    payload: reward
});

export const postReward = reward => dispatch => {
    const newReward = reward

    setTimeout(() => {
        dispatch(addReward(newReward));
    }, 2000);
};

export const resetReward = reset => ({
    type: ActionTypes.RESET_REWARD,
    payload: reset
});

export const postReset = reset => dispatch => {
    const resetRewards = reset

    setTimeout(() => {
        dispatch(resetReward(resetRewards));
    }, 2000);
}


