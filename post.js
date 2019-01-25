import { callAPI,HTTP_VERBS } from '@/utils/http';
const postService = {
  login(data) {
    return callAPI('auth/login', HTTP_VERBS.post, { ...data });
  },
  aa(){
    return callAPI('ad/movie_top', HTTP_VERBS.get);
  }
};
export default postService;
