// Automatically generated by mockimpl. DO NOT EDIT!

package mock

import (
	"context"
	"sync"

	"github.com/fleetdm/fleet/v4/server/mdm/android"
	"google.golang.org/api/androidmanagement/v1"
)

var _ android.Proxy = (*Proxy)(nil)

type SignupURLsCreateFunc func(callbackURL string) (*android.SignupDetails, error)

type EnterprisesCreateFunc func(ctx context.Context, req android.ProxyEnterprisesCreateRequest) (string, string, error)

type EnterprisesPoliciesPatchFunc func(enterpriseID string, policyName string, policy *androidmanagement.Policy) error

type EnterprisesEnrollmentTokensCreateFunc func(enterpriseName string, token *androidmanagement.EnrollmentToken) (*androidmanagement.EnrollmentToken, error)

type EnterpriseDeleteFunc func(enterpriseID string) error

type Proxy struct {
	SignupURLsCreateFunc        SignupURLsCreateFunc
	SignupURLsCreateFuncInvoked bool

	EnterprisesCreateFunc        EnterprisesCreateFunc
	EnterprisesCreateFuncInvoked bool

	EnterprisesPoliciesPatchFunc        EnterprisesPoliciesPatchFunc
	EnterprisesPoliciesPatchFuncInvoked bool

	EnterprisesEnrollmentTokensCreateFunc        EnterprisesEnrollmentTokensCreateFunc
	EnterprisesEnrollmentTokensCreateFuncInvoked bool

	EnterpriseDeleteFunc        EnterpriseDeleteFunc
	EnterpriseDeleteFuncInvoked bool

	mu sync.Mutex
}

func (p *Proxy) SignupURLsCreate(callbackURL string) (*android.SignupDetails, error) {
	p.mu.Lock()
	p.SignupURLsCreateFuncInvoked = true
	p.mu.Unlock()
	return p.SignupURLsCreateFunc(callbackURL)
}

func (p *Proxy) EnterprisesCreate(ctx context.Context, req android.ProxyEnterprisesCreateRequest) (string, string, error) {
	p.mu.Lock()
	p.EnterprisesCreateFuncInvoked = true
	p.mu.Unlock()
	return p.EnterprisesCreateFunc(ctx, req)
}

func (p *Proxy) EnterprisesPoliciesPatch(enterpriseID string, policyName string, policy *androidmanagement.Policy) error {
	p.mu.Lock()
	p.EnterprisesPoliciesPatchFuncInvoked = true
	p.mu.Unlock()
	return p.EnterprisesPoliciesPatchFunc(enterpriseID, policyName, policy)
}

func (p *Proxy) EnterprisesEnrollmentTokensCreate(enterpriseName string, token *androidmanagement.EnrollmentToken) (*androidmanagement.EnrollmentToken, error) {
	p.mu.Lock()
	p.EnterprisesEnrollmentTokensCreateFuncInvoked = true
	p.mu.Unlock()
	return p.EnterprisesEnrollmentTokensCreateFunc(enterpriseName, token)
}

func (p *Proxy) EnterpriseDelete(enterpriseID string) error {
	p.mu.Lock()
	p.EnterpriseDeleteFuncInvoked = true
	p.mu.Unlock()
	return p.EnterpriseDeleteFunc(enterpriseID)
}
