export type Router = {
  exact?: boolean;
  path?: string;
  title?: string;
  component: string;
  routes?: Router[];
};

const routers: Router[] = [
  { exact: true, path: '/', component: '@/pages/index' },
];

export default routers;
