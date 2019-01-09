const _beforeRouteEnter = (to, from, next) => {
  next(vm => {
    console.log(vm, vm._route);
  });
};

_beforeRouteEnter.isCustomMixin = true;

export const beforeRouteEnter = _beforeRouteEnter;
