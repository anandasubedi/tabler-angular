import { Component, OnInit } from '@angular/core'
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-forms-index',
  template: `
    <app-page>
      <app-page-title title="Forms" icon="fe fe-check-square"></app-page-title>

      <form action="https://httpbin.org/post" method="post" class="card">
        <div class="card-header">
          <h3 class="card-title">Form elements</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="form-group">
                <label class="form-label">Static</label>
                <div class="form-control-plaintext">Username</div>
              </div>
              <div class="form-group">
                <label class="form-label">Text</label>
                <input type="text" class="form-control" name="example-text-input" placeholder="Text..">
              </div>
              <div class="form-group">
                <label class="form-label">Disabled</label>
                <input type="text" class="form-control" name="example-disabled-input" placeholder="Disabled.."
                       value="Well, she turned me into a newt." disabled>
              </div>
              <div class="form-group">
                <label class="form-label">Readonly</label>
                <input type="text" class="form-control" name="example-disabled-input" placeholder="Disabled.."
                       value="Well, how'd you become king, then?" readonly>
              </div>
              <div class="form-group">
                <label class="form-label">Textarea <span class="form-label-small">56/100</span></label>
                <textarea class="form-control" name="example-textarea-input" rows="6" placeholder="Content..">
                  Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! 
                  We shall say 'Ni' again to you, if you do not appease us. I'm not a witch. I'm not a witch. 
                  Camelot!</textarea>
              </div>

              <app-forms-input-image [photos]="photos"></app-forms-input-image>

              <app-forms-input-color></app-forms-input-color>

              <div class="form-group">
                <label class="form-label">Input group</label>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search for...">
                  <span class="input-group-append">
							<button class="btn btn-primary" type="button">Go!</button>
						</span>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Input group buttons</label>
                <div class="input-group">
                  <input type="text" class="form-control">
                  <div class="input-group-append">
                    <button type="button" class="btn btn-primary">Action</button>
                    <button data-toggle="dropdown" type="button" class="btn btn-primary dropdown-toggle"></button>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="javascript:void(0)">
                        News
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Messages
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Edit Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <app-forms-input-icon></app-forms-input-icon>

              <div class="form-group">
                <label class="form-label">Separated inputs</label>
                <div class="row gutters-xs">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Search for...">
                  </div>
                  <span class="col-auto">
							<button class="btn btn-secondary" type="button"><i class="fe fe-search"></i></button>
						</span>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">ZIP Code</label>
                <div class="row gutters-sm">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Search for...">
                  </div>
                  <span class="col-auto align-self-center">
							<span class="form-help" data-toggle="popover" data-placement="top"
                    data-content="<p>ZIP Code must be US or CDN format. You can use an extended ZIP+4 code to
determine address more accurately.</p><p class='mb-0'><a href=''>USP ZIP codes lookup tools</a></p>">?</span>
						</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="form-group">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" name="example-password-input" placeholder="Password..">
              </div>

              <div class="form-group">
                <label class="form-label">Valid State</label>
                <input type="text" class="form-control is-valid" name="example-text-input-valid"
                       placeholder="Valid State..">

                <input type="text" class="form-control mt-3 state-valid" value="Valid state">
              </div>

              <div class="form-group">
                <label class="form-label">Invalid State</label>
                <input type="text" class="form-control is-invalid" name="example-text-input-invalid"
                       placeholder="Invalid State..">
                <div class="invalid-feedback">Invalid feedback</div>

                <input type="text" class="form-control mt-3 state-invalid" value="Invalid state">
              </div>

              <div class="form-group">
                <label class="form-label">Country</label>
                <select class="form-control custom-select">
                  <option value="">Germany</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Ratios</label>
                <div class="row align-items-center">
                  <div class="col">
                    <input type="range" class="form-control custom-range" step="5" min="0" max="50">
                  </div>
                  <div class="col-auto">
                    <input type="number" class="form-control w-8" value="45">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Size</label>
                <div class="selectgroup w-100">
                  <label class="selectgroup-item">
                    <input type="radio" name="value" value="50" class="selectgroup-input" checked="">
                    <span class="selectgroup-button">S</span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="radio" name="value" value="100" class="selectgroup-input">
                    <span class="selectgroup-button">M</span>
                  </label>

                  <label class="selectgroup-item">
                    <input type="radio" name="value" value="150" class="selectgroup-input">
                    <span class="selectgroup-button">L</span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="radio" name="value" value="200" class="selectgroup-input">
                    <span class="selectgroup-button">XL</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Icons input</label>
                <div class="selectgroup w-100">
                  <label class="selectgroup-item">
                    <input type="radio" name="transportation" value="2" class="selectgroup-input">
                    <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-smartphone"></i></span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="radio" name="transportation" value="1" class="selectgroup-input" checked="">
                    <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-tablet"></i></span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="radio" name="transportation" value="6" class="selectgroup-input">
                    <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-monitor"></i></span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="radio" name="transportation" value="6" class="selectgroup-input">
                    <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-x"></i></span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Icons input</label>
                <div class="selectgroup selectgroup-pills">
                  <label class="selectgroup-item">
                    <input type="radio" name="icon-input" value="1" class="selectgroup-input" checked="">
                    <span class="selectgroup-button selectgroup-button-icon"><i class="fa fa-male"></i></span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="radio" name="icon-input" value="2" class="selectgroup-input">
                    <span class="selectgroup-button selectgroup-button-icon">
                      <i class="fa fa-female"></i></span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Your skills</label>
                <div class="selectgroup selectgroup-pills">
                  <label class="selectgroup-item">
                    <input type="checkbox" name="value" value="HTML" class="selectgroup-input" checked="">
                    <span class="selectgroup-button">HTML</span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="checkbox" name="value" value="CSS" class="selectgroup-input">
                    <span class="selectgroup-button">CSS</span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="checkbox" name="value" value="PHP" class="selectgroup-input">
                    <span class="selectgroup-button">PHP</span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="checkbox" name="value" value="JavaScript" class="selectgroup-input">
                    <span class="selectgroup-button">JavaScript</span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="checkbox" name="value" value="Ruby" class="selectgroup-input">
                    <span class="selectgroup-button">Ruby</span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="checkbox" name="value" value="Ruby" class="selectgroup-input">
                    <span class="selectgroup-button">Ruby</span>
                  </label>
                  <label class="selectgroup-item">
                    <input type="checkbox" name="value" value="C++" class="selectgroup-input">
                    <span class="selectgroup-button">C++</span>
                  </label>
                </div>
              </div>

              <app-forms-input-toggle></app-forms-input-toggle>

              <div class="form-group">
                <div class="form-label">Toggle switch single</div>
                <label class="custom-switch">
                  <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input">
                  <span class="custom-switch-indicator"></span>
                  <span class="custom-switch-description">I agree with terms and conditions</span>
                </label>
              </div>

               <app-forms-form-fieldset></app-forms-form-fieldset> 
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="form-group">
                <div class="form-label">Radios</div>
                <div class="custom-controls-stacked">
                  <label class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" name="example-radios" value="option1" checked>
                    <div class="custom-control-label">Option 1</div>
                  </label>
                  <label class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" name="example-radios" value="option2">
                    <div class="custom-control-label">Option 2</div>
                  </label>
                  <label class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" name="example-radios" value="option3" disabled>
                    <div class="custom-control-label">Option Disabled</div>
                  </label>
                  <label class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" name="example-radios2" value="option4" disabled
                           checked>
                    <div class="custom-control-label">Option Disabled Checked</div>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="form-label">Inline Radios</div>
                <div class="custom-controls-stacked">
                  <label class="custom-control custom-radio custom-control-inline">
                    <input type="radio" class="custom-control-input" name="example-inline-radios" value="option1"
                           checked>
                    <span class="custom-control-label">Option 1</span>
                  </label>
                  <label class="custom-control custom-radio custom-control-inline">
                    <input type="radio" class="custom-control-input" name="example-inline-radios" value="option2">
                    <span class="custom-control-label">Option 2</span>
                  </label>
                  <label class="custom-control custom-radio custom-control-inline">
                    <input type="radio" class="custom-control-input" name="example-inline-radios" value="option3">
                    <span class="custom-control-label">Option 3</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="form-label">Checkboxes</div>
                <div class="custom-controls-stacked">
                  <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1"
                           checked>
                    <span class="custom-control-label">Option 1</span>
                  </label>
                  <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="example-checkbox2" value="option2">
                    <span class="custom-control-label">Option 2</span>
                  </label>
                  <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="example-checkbox3" value="option3"
                           disabled>
                    <span class="custom-control-label">Option Disabled</span>
                  </label>
                  <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="example-checkbox4" value="option4" checked
                           disabled>
                    <span class="custom-control-label">Option Disabled Checked</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="form-label">Inline Checkboxes</div>
                <div>
                  <label class="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" class="custom-control-input" name="example-inline-checkbox1" value="option1"
                           checked>
                    <span class="custom-control-label">Option 1</span>
                  </label>
                  <label class="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" class="custom-control-input" name="example-inline-checkbox2" value="option2">
                    <span class="custom-control-label">Option 2</span>
                  </label>
                  <label class="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" class="custom-control-input" name="example-inline-checkbox3" value="option3">
                    <span class="custom-control-label">Option 3</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="form-label">Bootstrap's Custom File Input</div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" name="example-file-input-custom">
                  <label class="custom-file-label">Choose file</label>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Date of birth</label>
                <div class="row gutters-xs">
                  <div class="col-5">
                    <select name="user[month]" class="form-control custom-select">
                      <option value="">Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option selected="selected" value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                  <div class="col-3">
                    <select name="user[day]" class="form-control custom-select">
                      <option value="">Day</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option selected="selected" value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </div>
                  <div class="col-4">
                    <select name="user[year]" class="form-control custom-select">
                      <option value="">Year</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option selected="selected" value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                      <option value="1960">1960</option>
                      <option value="1959">1959</option>
                      <option value="1958">1958</option>
                      <option value="1957">1957</option>
                      <option value="1956">1956</option>
                      <option value="1955">1955</option>
                      <option value="1954">1954</option>
                      <option value="1953">1953</option>
                      <option value="1952">1952</option>
                      <option value="1951">1951</option>
                      <option value="1950">1950</option>
                      <option value="1949">1949</option>
                      <option value="1948">1948</option>
                      <option value="1947">1947</option>
                      <option value="1946">1946</option>
                      <option value="1945">1945</option>
                      <option value="1944">1944</option>
                      <option value="1943">1943</option>
                      <option value="1942">1942</option>
                      <option value="1941">1941</option>
                      <option value="1940">1940</option>
                      <option value="1939">1939</option>
                      <option value="1938">1938</option>
                      <option value="1937">1937</option>
                      <option value="1936">1936</option>
                      <option value="1935">1935</option>
                      <option value="1934">1934</option>
                      <option value="1933">1933</option>
                      <option value="1932">1932</option>
                      <option value="1931">1931</option>
                      <option value="1930">1930</option>
                      <option value="1929">1929</option>
                      <option value="1928">1928</option>
                      <option value="1927">1927</option>
                      <option value="1926">1926</option>
                      <option value="1925">1925</option>
                      <option value="1924">1924</option>
                      <option value="1923">1923</option>
                      <option value="1922">1922</option>
                      <option value="1921">1921</option>
                      <option value="1920">1920</option>
                      <option value="1919">1919</option>
                      <option value="1918">1918</option>
                      <option value="1917">1917</option>
                      <option value="1916">1916</option>
                      <option value="1915">1915</option>
                      <option value="1914">1914</option>
                      <option value="1913">1913</option>
                      <option value="1912">1912</option>
                      <option value="1911">1911</option>
                      <option value="1910">1910</option>
                      <option value="1909">1909</option>
                      <option value="1908">1908</option>
                      <option value="1907">1907</option>
                      <option value="1906">1906</option>
                      <option value="1905">1905</option>
                      <option value="1904">1904</option>
                      <option value="1903">1903</option>
                      <option value="1902">1902</option>
                      <option value="1901">1901</option>
                      <option value="1900">1900</option>
                      <option value="1899">1899</option>
                      <option value="1898">1898</option>
                      <option value="1897">1897</option>
                    </select>
                  </div>
                </div>
              </div>


              <div class="form-group">
                <label class="form-label">Username</label>
                <div class="input-group">
						<span class="input-group-prepend" id="basic-addon1">
							<span class="input-group-text">@</span>
						</span>
                  <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                         aria-describedby="basic-addon1">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Subdomain</label>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Your subdomain" aria-label="Recipient's username"
                         aria-describedby="basic-addon2">
                  <span class="input-group-append" id="basic-addon2">
							<span class="input-group-text">.example.com</span>
						</span>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Your vanity URL</label>
                <div class="input-group">
						<span class="input-group-prepend" id="basic-addon3">
							<span class="input-group-text">https://example.com/users/</span>
						</span>
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Price</label>
                <div class="input-group">
						<span class="input-group-prepend">
							<span class="input-group-text">$</span>
						</span>
                  <input type="text" class="form-control text-right" aria-label="Amount (to the nearest dollar)">
                  <span class="input-group-append">
							<span class="input-group-text">.00</span>
						</span>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Button input</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                      Action
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="javascript:void(0)">Action</a>
                      <a class="dropdown-item" href="javascript:void(0)">Another action</a>
                      <a class="dropdown-item" href="javascript:void(0)">Something else here</a>
                      <div role="separator" class="dropdown-divider"></div>
                      <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
                    </div>
                  </div>
                  <input type="text" class="form-control" aria-label="Text input with dropdown button">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Tags</label>
                <input type="text" class="form-control" id="input-tags" value="aa,bb,cc,dd">
              </div>

              <div class="form-group">
                <label class="form-label">Beast</label>
                <select name="beast" id="select-beast" class="form-control custom-select">
                  <option value="1">Chuck Testa</option>
                  <option value="4">Sage Cattabriga-Alosa</option>
                  <option value="3">Nikola Tesla</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Users list</label>
                <select name="user" id="select-users" class="form-control custom-select">


                  <option *ngFor="let user of users"
                          value="{{ user.id }}"
                          [attr.data-data]='{"image": user.photo}'>
                    {{ user.name }}
                    {{ user.surname }}
                  </option>

                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Countries</label>
                <select name="country" id="select-countries" class="form-control custom-select">
                  <option value="br" data-data='{"image": "./assets/images/flags/br.svg"}'>Brazil</option>
                  <option value="cz" data-data='{"image": "./assets/images/flags/cz.svg"}'>Czech Republic</option>
                  <option value="de" data-data='{"image": "./assets/images/flags/de.svg"}'>Germany</option>
                  <option value="pl" data-data='{"image": "./assets/images/flags/pl.svg"}' selected>Poland</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-right">
          <div class="d-flex">
            <a href="javascript:void(0)" class="btn btn-link">Cancel</a>
            <button type="submit" class="btn btn-primary ml-auto">Send data</button>
          </div>
        </div>
      </form>
    </app-page>
  `
})
export class FormsIndexComponent implements OnInit {
  public users = []
  public photos = []

  constructor(private demoService: DemoService) {
  }

  ngOnInit() {
    this.users = this.demoService.users
    this.photos = this.demoService.photos.slice(30, 39)
      .map((photo, idx) => Object.assign({}, photo, { checked: (idx % 2 === 0) }))
  }
}
