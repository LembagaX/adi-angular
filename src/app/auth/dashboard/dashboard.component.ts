import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/interfaces/user';
import { ServerService } from 'src/app/server.service';
import { CustomerService } from 'src/app/customer.service';
import { MaterialService } from 'src/app/material.service';
import { CategoryService } from 'src/app/category.service';
import { AnnouncementService } from 'src/app/announcement.service';
import { Announcement } from 'src/app/response/announcement';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user: User;
  public role: string;
  public providers: number;
  public customers: number;
  public materials: number;
  public categories: number;
  public announcements: Announcement[];

  constructor(
    private _auth: AuthService,
    private _provider: ServerService,
    private _customer: CustomerService,
    private _material: MaterialService,
    private _category: CategoryService,
    private _announcement: AnnouncementService
  ) {}

  ngOnInit() {
    this.user = this._auth.currentUser();
    this.role = this._auth.role();
    this.buildProviders();
    this.buildCustomers();
    this.buildMeterials();
    this.buildCategories();
    this.buildAnnouncements();
  }

  private buildAnnouncements() {
    this._announcement.index().subscribe(response => this.announcements = response);
  }

  private buildCategories() {
    this._category.index().subscribe(result => this.categories = result.length);
  }

  private buildCustomers() {
    this._customer.index().subscribe(result => this.customers = result.length);
  }

  private buildProviders() {
    this._provider.provderIndex().subscribe(result => this.providers = result.length);
  }

  private buildMeterials() {
    this._material.index().subscribe(result => this.materials = result.length);
  }
}
