// Simple Toast Notification System
class Toast {
    static show(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
}

// Add styles
const toastStyles = `
.toast { position: fixed; top: 20px; right: 20px; padding: 1rem; border-radius: 8px; color: white; z-index: 1000; animation: slideIn 0.3s; }
.toast-success { background: #28a745; }
.toast-error { background: #dc3545; }
.toast-info { background: #17a2b8; }
@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
`;
const style = document.createElement('style');
style.textContent = toastStyles;
document.head.appendChild(style);

window.Toast = Toast;