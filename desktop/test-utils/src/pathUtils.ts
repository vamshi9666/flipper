/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

export function normalizePath(path: string): string {
  if (process.platform === 'win32') {
    path = path.replace(/\\/g, '/');
    path = path.substring(path.indexOf('/'));
  }
  return path;
}
