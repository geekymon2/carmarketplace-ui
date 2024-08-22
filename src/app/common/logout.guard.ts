import { Injectable } from '@angular/core';

export const logoutGuard = (): boolean => {
  localStorage.setItem('mode', 'logged-out');
  return true;
};
