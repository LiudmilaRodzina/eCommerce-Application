import Cookies from 'js-cookie';
import Profile from '@/pages/profile/profile';
import createComponent from '../components';
import './header.scss';
import { customerOn } from '../servercomp/servercomp';

export default class Header {
  header: HTMLElement;

  nav: HTMLElement;

  homeLink: null | HTMLElement;

  loginLink: null | HTMLElement;

  regLink: null | HTMLElement;

  catalogLink: null | HTMLElement;

  logoutLink: null | HTMLElement;

  profileLink: null | HTMLElement;

  constructor() {
    this.header = createComponent('header', ['header'], {});
    this.nav = createComponent('nav', ['nav-items'], {});
    this.homeLink = null;
    this.loginLink = null;
    this.regLink = null;
    this.catalogLink = null;
    this.profileLink = null;
    this.logoutLink = null;
    this.render();
  }

  render() {
    this.homeLink = createComponent('a', ['nav-link', 'home-link'], {});
    this.homeLink.textContent = 'Home';
    this.homeLink.setAttribute('href', '');
    this.homeLink.innerHTML +=
      '<img width="24" height="24" src="https://img.icons8.com/sf-regular/48/FFFFFF/home-page.png" alt="home-page"/>';
    this.homeLink.addEventListener('click', (event: MouseEvent) => {
      const centerElement = document.querySelector('.centercard');
      centerElement?.classList.remove('centercard');
      event.preventDefault();
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });

    this.catalogLink = createComponent('a', ['nav-link', 'catalog-link'], {});
    this.catalogLink.textContent = 'Catalog';
    this.catalogLink.setAttribute('href', '');
    this.catalogLink.innerHTML +=
      '<img width="22" height="22" src="https://img.icons8.com/ios/50/FFFFFF/spiral-bound-booklet.png" alt="spiral-bound-booklet"/>';
    this.catalogLink.addEventListener('click', (event: MouseEvent) => {
      const centerElement = document.querySelector('.centercard');
      centerElement?.classList.remove('centercard');
      event.preventDefault();
      window.history.pushState({}, '', '/catalog');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });

    this.loginLink = createComponent('a', ['nav-link', 'login-link'], {});
    this.loginLink.textContent = 'Login';
    this.loginLink.setAttribute('href', '');
    this.loginLink.innerHTML +=
      '<img width="22" height="22" src="https://img.icons8.com/sf-black/64/FFFFFF/enter-2.png" alt="enter-2"/>';
    this.loginLink.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      window.history.pushState({}, '', '/login');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });

    this.regLink = createComponent('a', ['nav-link', 'reg-link'], {});
    this.regLink.textContent = 'Register';
    this.regLink.setAttribute('href', '');
    this.regLink.innerHTML +=
      '<img width="22" height="22" src="https://img.icons8.com/sf-black/64/FFFFFF/add-user-male.png" alt="add-user-male"/>';
    this.regLink.addEventListener('click', (event: MouseEvent) => {
      const centerElement = document.querySelector('.centercard');
      centerElement?.classList.remove('centercard');
      event.preventDefault();
      window.history.pushState({}, '', '/register');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });

    this.logoutLink = createComponent('a', ['nav-link', 'logout-link'], {});
    this.logoutLink.textContent = 'Logout';
    this.logoutLink.setAttribute('href', '');
    this.logoutLink.innerHTML +=
      '<img width="22" height="22" src="https://img.icons8.com/sf-black/64/FFFFFF/exit.png" alt="exit"/>';
    this.logoutLink.addEventListener('click', (event: MouseEvent) => {
      const centerElement = document.querySelector('.centercard');
      centerElement?.classList.remove('centercard');
      event.preventDefault();
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      Cookies.remove('log');
      Cookies.remove('token');
      customerOn(this);
    });

    this.profileLink = createComponent('a', ['nav-link', 'profile-link'], {});
    this.profileLink.textContent = 'Profile';
    this.profileLink.setAttribute('href', '/');
    this.profileLink.innerHTML +=
      '<img width="22" height="22" src="https://img.icons8.com/sf-black/64/FFFFFF/user-male.png" alt="user-profile"/>';
    this.profileLink.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      window.history.pushState({}, '', '/profile');
      window.dispatchEvent(new PopStateEvent('popstate'));
      Profile.populateProfileForm();
    });

    this.header.append(this.homeLink, this.nav);
    this.nav.append(
      this.catalogLink,
      this.profileLink,
      this.loginLink,
      this.regLink,
    );
  }

  public getHeader() {
    return this.header;
  }
}
