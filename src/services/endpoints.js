import axios from "axios";

export const endpoints = {
  getAccounts: axios.get("https://api.factoryfour.com/accounts/health/status"),
  getAssets: axios.get("https://api.factoryfour.com/assets/health/status"),
  getCustomers: axios.get(
    "https://api.factoryfour.com/customers/health/status"
  ),
  getDatapoints: axios.get(
    "https://api.factoryfour.com/datapoints/health/status"
  ),
  getDevices: axios.get("https://api.factoryfour.com/devices/health/status"),
  getDocuments: axios.get(
    "https://api.factoryfour.com/documents/health/status"
  ),
  getForms: axios.get("https://api.factoryfour.com/forms/health/status"),
  getInvites: axios.get(
    "https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/invites/health/status"
  ),
  getMedia: axios.get("https://api.factoryfour.com/media/health/status"),
  getMessages: axios.get(
    "https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/messages/health/status"
  ),
  getNamespaces: axios.get(
    "https://api.factoryfour.com/namespaces/health/status"
  ),
  getOrders: axios.get("https://api.factoryfour.com/orders/health/status"),
  getPatients: axios.get("https://api.factoryfour.com/patients/health/status"),
  getRelationships: axios.get(
    "https://api.factoryfour.com/relationships/health/status"
  ),
  getRules: axios.get("https://api.factoryfour.com/rules/health/status"),
  getTemplates: axios.get(
    "https://api.factoryfour.com/templates/health/status"
  ),
  getUsers: axios.get(
    "https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/users/health/status"
  ),
  getWorkflows: axios.get(
    "https://api.factoryfour.com/workflows/health/status"
  ),
};
