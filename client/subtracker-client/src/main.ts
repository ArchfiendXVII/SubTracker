import { getCurrentWindow } from '@tauri-apps/api/window';

window.addEventListener("DOMContentLoaded", () => {
  const desklet = document.querySelector('.desklet');

  document.getElementById('open-settings')?.addEventListener('click', () => {
    desklet?.classList.add('settings-open');
  });

  document.getElementById('close-settings')?.addEventListener('click', () => {
    desklet?.classList.remove('settings-open');
  });

  document.getElementById('hide-to-tray')?.addEventListener('click', async () => {
    console.log('hide to tray clicked');
    await getCurrentWindow().hide();
  });

  document.getElementById('quit')?.addEventListener('click', () => {
    window.close();
  });
});