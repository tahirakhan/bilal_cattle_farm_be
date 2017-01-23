package com.tahir.project.controller;

/**
 * Created by Tahir on 3/7/15.
 */

import com.tahir.project.model.PurchaseDetail;
import com.tahir.project.service.PurchaseDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/purchaseDetail")
public class PurchaseDetailController {

  @Autowired
  PurchaseDetailService service;
  /*
   * This method will list all existing employees.
   */
  @RequestMapping(value = { "/list" }, method = RequestMethod.GET)
  @ResponseBody
  public List<PurchaseDetail> listPurchaseDetails(ModelMap model) {

    List<PurchaseDetail> PurchaseDetails = service.findAll();
    model.addAttribute("PurchaseDetails", PurchaseDetails);
    return PurchaseDetails;
  }

  /*
     * This method will provide the medium to add a new employee.
     */
  @RequestMapping(value = { "/save" }, method = RequestMethod.POST)
  public @ResponseBody PurchaseDetail  savePurchaseDetail(@RequestBody PurchaseDetail PurchaseDetail) {
    service.save(PurchaseDetail);
    return PurchaseDetail;
  }

  /*
   * This method will provide the medium to add a new employee.
   */
  @RequestMapping(value = { "/update" }, method = RequestMethod.PUT)
  public @ResponseBody PurchaseDetail  updatePurchaseDetail(@RequestBody PurchaseDetail PurchaseDetail) {
    service.update(PurchaseDetail);
    return PurchaseDetail;
  }

  /*
   * This method will provide the medium to add a new employee.
   */
  @RequestMapping(produces = "application/json", value = { "/PurchaseDetail/{PurchaseDetail_id}" }, method = RequestMethod.GET)
  public @ResponseBody PurchaseDetail  getPurchaseDetail(@PathVariable("PurchaseDetail_id") Integer PurchaseDetail_id) {
    return service.findByPurchaseDetailId(PurchaseDetail_id);
  }

  /*
  * This method will provide the medium to add a new employee.
  */
  @RequestMapping(value = { "/PurchaseDetail/{PurchaseDetail_id}" }, method = RequestMethod.DELETE)
  public @ResponseBody void  deletePurchaseDetail(@PathVariable("PurchaseDetail_id") Integer PurchaseDetail_id) {
    service.delete(PurchaseDetail_id);
  }

}
