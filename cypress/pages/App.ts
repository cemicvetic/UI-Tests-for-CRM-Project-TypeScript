import BasePage from "../base.page";
import Navbar from "../../component/navbar";
import Logo from "../../component/logo";
import Dropdown from "../../component/dropdown";
import ModalWindow from "../../component/modal-window";
import SearchForm from "../../component/search-form";
import Dashboard from "../../component/dashboard";
import Pagination from "../../component/pagination";

export default class App extends BasePage {
    navbar = Navbar
    logo = Logo
    dropdown = Dropdown
    modalWindow = ModalWindow
    searchForm = SearchForm
    dashboard = Dashboard
    pagination = Pagination
}