import { ComponentType, LazyExoticComponent, lazy } from 'react';

export function lazyImport<TProps extends object>(
  factory: () => Promise<{ default: ComponentType<TProps> }>,
): LazyExoticComponent<ComponentType<TProps>> {
  return lazy(factory);
}
