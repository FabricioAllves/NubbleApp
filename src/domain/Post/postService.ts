import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer NQ.MrTYdemsnesmIDgpEmArfAU6PyqPNuO-Ih6jAC-uNIjw8bDlCptQhtQGsWac',
    },
  });

  let data = await response.json();
  console.log('FETCH DATA:', data);

  return postListMock;
}

export const postService = {
  getList,
};
