export default {
  registerCoach(state, payload) {
    console.log('register coach', state, payload);
    state.coaches.push(payload);
  }
};